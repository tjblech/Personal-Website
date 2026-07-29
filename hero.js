(function(){

  const CONFIG = {
    fullName: "Tory",
    nickname: "TJ",
    tagline: "a computer science student at Northeastern, interested in startups, software engineering, and quant."
  };

  const root = document.getElementById('phRoot');

  (function(){
    const canvas = document.getElementById('phFlowField');
    const ctx = canvas.getContext('2d');
    const BG = '#161220';
    const COLORS = [
      [241,236,245,.42],
      [241,236,245,.40],
      [241,236,245,.36],
      [226,169,178,.44],
      [148,166,208,.42],
      [227,193,127,.40]
    ];
    const TRAIL_LENGTH = 72;
    const MAX_AGE = 620;
    let particles = [];
    let t = 0;

    function resetParticle(p, randomAge=false){
      p.x = Math.random()*root.clientWidth;
      p.y = Math.random()*root.clientHeight;
      p.age = randomAge ? Math.random()*MAX_AGE : 0;
      p.color = COLORS[Math.floor(Math.random()*COLORS.length)];
      p.trail = [{x:p.x,y:p.y}];
    }

    function initParticles(){
      const width = root.clientWidth;
      const height = root.clientHeight;
      const count = Math.min(160, Math.max(70, Math.round((width*height)/8000)));
      particles = Array.from({length:count},()=>{
        const p={};
        resetParticle(p,true);
        return p;
      });
    }

    function resize(){
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const width = root.clientWidth;
      const height = root.clientHeight;
      canvas.width = Math.round(width*ratio);
      canvas.height = Math.round(height*ratio);
      canvas.style.width = width+'px';
      canvas.style.height = height+'px';
      ctx.setTransform(ratio,0,0,ratio,0,0);
      ctx.fillStyle = BG;
      ctx.fillRect(0,0,width,height);
      initParticles();
    }

    function angleAt(x,y,time){
      return Math.sin(x*.0072 + time*.32) + Math.cos(y*.0094 - time*.24);
    }

    function frame(){
      const width = root.clientWidth;
      const height = root.clientHeight;
      ctx.fillStyle = BG;
      ctx.fillRect(0,0,width,height);
      t += .0015;

      for(const p of particles){
        const angle = angleAt(p.x,p.y,t);
        p.x += Math.cos(angle)*.54;
        p.y += Math.sin(angle)*.54;
        p.age++;
        p.trail.push({x:p.x,y:p.y});
        if(p.trail.length>TRAIL_LENGTH) p.trail.shift();

        const life = Math.sin(Math.PI*Math.min(p.age/MAX_AGE,1));
        const [r,g,b,baseAlpha] = p.color;
        for(let i=1;i<p.trail.length;i++){
          const progress = i/(p.trail.length-1);
          const alpha = baseAlpha*Math.pow(progress,1.45)*life;
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.lineWidth = .55 + progress*.55;
          ctx.beginPath();
          ctx.moveTo(p.trail[i-1].x,p.trail[i-1].y);
          ctx.lineTo(p.trail[i].x,p.trail[i].y);
          ctx.stroke();
        }

        if(p.x<-30||p.x>width+30||p.y<-30||p.y>height+30||p.age>=MAX_AGE){
          resetParticle(p,false);
        }
      }
      requestAnimationFrame(frame);
    }

    resize();
    window.addEventListener('resize', resize);
    requestAnimationFrame(frame);
  })();

  const prefixEl = document.getElementById('phPrefix');
  const nameEl = document.getElementById('phName');
  const nameStage = document.getElementById('phNameStage');
  const typedLine = document.getElementById('phTypedLine');
  const taglineEl = document.getElementById('phTagline');
  const actionsEl = document.getElementById('phActions');
  const cursorEl = document.getElementById('phCursor');

  const wait = ms => new Promise(resolve=>setTimeout(resolve,ms));
  let maxLineWidth = 0;

  const lineMeasure = document.createElement('span');
  lineMeasure.setAttribute('aria-hidden','true');
  Object.assign(lineMeasure.style,{
    position:'absolute',
    visibility:'hidden',
    pointerEvents:'none',
    whiteSpace:'pre',
    font:'inherit'
  });
  nameStage.appendChild(lineMeasure);

  function measurePhrase(text){
    lineMeasure.textContent=text;
    return Math.ceil(lineMeasure.getBoundingClientRect().width)+6;
  }

  function centerTypedLine(){
    const currentWidth = typedLine.getBoundingClientRect().width;
    const offset = Math.max(0,(maxLineWidth-currentWidth)/2);
    typedLine.style.transform = `translateX(${offset}px)`;
  }

  function makeLetter(ch){
    const span=document.createElement('span');
    span.className='ph-letter';
    span.textContent=ch===' ' ? ' ' : ch;
    return span;
  }

  async function typeText(container,text,delay=90){
    cursorEl.classList.add('typing');
    for(const ch of text){
      const letter=makeLetter(ch);
      container.appendChild(letter);
      centerTypedLine();
      requestAnimationFrame(()=>letter.classList.add('show'));
      await wait(delay);
    }
    cursorEl.classList.remove('typing');
  }

  async function eraseText(container,delay=76){
    cursorEl.classList.add('typing');
    while(container.lastElementChild){
      const letter=container.lastElementChild;
      letter.classList.remove('show');
      await wait(95);
      letter.remove();
      centerTypedLine();
      await wait(Math.max(0,delay-40));
    }
    cursorEl.classList.remove('typing');
  }

  async function beginIntro(){
    maxLineWidth=Math.max(
      measurePhrase(`hi, i'm ${CONFIG.fullName}`),
      measurePhrase(`hi, i'm ${CONFIG.nickname}`)
    );
    nameStage.style.width=maxLineWidth+'px';
    centerTypedLine();

    await wait(500);
    document.getElementById('phEyebrow').classList.add('show');
    await typeText(prefixEl,"hi, i'm ",86);
    await typeText(nameEl,CONFIG.fullName,92);

    taglineEl.textContent=CONFIG.tagline;
    taglineEl.classList.add('show');
    actionsEl.classList.add('show');
    startNameCycle();
  }

  function startNameCycle(){
    const variants=[CONFIG.fullName,CONFIG.nickname];
    let index=0;
    setInterval(async()=>{
      index=(index+1)%variants.length;
      await eraseText(nameEl,72);
      await wait(130);
      await typeText(nameEl,variants[index],92);
    },6000);
  }

  if(document.fonts&&document.fonts.ready){
    document.fonts.ready.then(beginIntro);
  }else{
    beginIntro();
  }

  const eyesWrap = document.getElementById('phEyesWrap');
  const eyes = document.getElementById('phEyes');
  const pupilL = document.getElementById('phPupilL');
  const pupilR = document.getElementById('phPupilR');
  const MAX_OFFSET = 5;

  document.addEventListener('mousemove', (e)=>{
    const rect = eyes.getBoundingClientRect();
    const cx = rect.left + rect.width/2;
    const cy = rect.top + rect.height/2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx,dy) || 1;
    const ox = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, (dx/dist)*MAX_OFFSET));
    const oy = Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, (dy/dist)*MAX_OFFSET));
    pupilL.style.transform = `translate(${ox}px, ${oy}px)`;
    pupilR.style.transform = `translate(${ox}px, ${oy}px)`;
  });

  function blink(){
    eyes.classList.add('blink');
    setTimeout(()=>eyes.classList.remove('blink'), 160);
    setTimeout(blink, 3500 + Math.random()*3500);
  }
  setTimeout(blink, 4000);

  const backdrop = document.getElementById('phModalBackdrop');
  const boardEl = document.getElementById('phBoard');
  const statusEl = document.getElementById('phStatus');
  const closeBtn = document.getElementById('phModalClose');
  const resetBtn = document.getElementById('phReset');

  eyesWrap.addEventListener('click', ()=>{ backdrop.classList.add('open'); if(!chessStarted){ initChess(); chessStarted=true; } });
  closeBtn.addEventListener('click', ()=> backdrop.classList.remove('open'));
  backdrop.addEventListener('click', (e)=>{ if(e.target===backdrop) backdrop.classList.remove('open'); });
  resetBtn.addEventListener('click', ()=> initChess());

  let chessStarted=false;

  function inBounds(r,c){ return r>=0&&r<8&&c>=0&&c<8; }
  function opponent(c){ return c==='w'?'b':'w'; }
  function cloneBoard(b){ return b.map(row=>row.map(cell=>cell?{...cell}:null)); }

  function initialBoard(){
    const b = Array.from({length:8},()=>Array(8).fill(null));
    const back=['r','n','b','q','k','b','n','r'];
    for(let c=0;c<8;c++){
      b[0][c]={type:back[c],color:'b'};
      b[1][c]={type:'p',color:'b'};
      b[6][c]={type:'p',color:'w'};
      b[7][c]={type:back[c],color:'w'};
    }
    return b;
  }

  function getAttacks(board,r,c){
    const piece = board[r][c]; if(!piece) return [];
    const {type,color} = piece;
    const res=[];
    const add=(rr,cc)=>{ if(inBounds(rr,cc)) res.push([rr,cc]); };
    if(type==='p'){
      const dir = color==='w' ? -1 : 1;
      add(r+dir,c-1); add(r+dir,c+1);
    } else if(type==='n'){
      [[-2,-1],[-2,1],[-1,-2],[-1,2],[1,-2],[1,2],[2,-1],[2,1]].forEach(([dr,dc])=>add(r+dr,c+dc));
    } else if(type==='k'){
      for(let dr=-1;dr<=1;dr++) for(let dc=-1;dc<=1;dc++){ if(dr||dc) add(r+dr,c+dc); }
    } else {
      const dirsB=[[-1,-1],[-1,1],[1,-1],[1,1]];
      const dirsR=[[-1,0],[1,0],[0,-1],[0,1]];
      let dirs = type==='b' ? dirsB : type==='r' ? dirsR : [...dirsB,...dirsR];
      dirs.forEach(([dr,dc])=>{
        let rr=r+dr, cc=c+dc;
        while(inBounds(rr,cc)){
          res.push([rr,cc]);
          if(board[rr][cc]) break;
          rr+=dr; cc+=dc;
        }
      });
    }
    return res;
  }

  function isAttacked(board,r,c,byColor){
    for(let rr=0;rr<8;rr++) for(let cc=0;cc<8;cc++){
      const p=board[rr][cc];
      if(p && p.color===byColor){
        const atk=getAttacks(board,rr,cc);
        for(const [ar,ac] of atk){ if(ar===r&&ac===c) return true; }
      }
    }
    return false;
  }

  function findKing(board,color){
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const p=board[r][c];
      if(p && p.type==='k' && p.color===color) return [r,c];
    }
    return null;
  }

  function getPseudoMoves(board,r,c){
    const piece=board[r][c]; if(!piece) return [];
    const {type,color}=piece;
    const moves=[];
    if(type==='p'){
      const dir = color==='w' ? -1 : 1;
      const startRow = color==='w' ? 6 : 1;
      if(inBounds(r+dir,c) && !board[r+dir][c]){
        moves.push([r+dir,c]);
        if(r===startRow && !board[r+2*dir][c]) moves.push([r+2*dir,c]);
      }
      [c-1,c+1].forEach(cc=>{
        if(inBounds(r+dir,cc)){
          const t=board[r+dir][cc];
          if(t && t.color!==color) moves.push([r+dir,cc]);
        }
      });
    } else {
      getAttacks(board,r,c).forEach(([rr,cc])=>{
        const t=board[rr][cc];
        if(!t || t.color!==color) moves.push([rr,cc]);
      });
    }
    return moves;
  }

  function applyMoveRaw(board,fr,fc,tr,tc){
    const nb=cloneBoard(board);
    const piece=nb[fr][fc];
    nb[tr][tc]=piece;
    nb[fr][fc]=null;
    if(piece.type==='p' && (tr===0||tr===7)) piece.type='q';
    return nb;
  }

  function generateLegalMoves(board,color){
    const legal=[];
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const p=board[r][c];
      if(p && p.color===color){
        getPseudoMoves(board,r,c).forEach(([tr,tc])=>{
          const nb=applyMoveRaw(board,r,c,tr,tc);
          const kp=findKing(nb,color);
          if(kp && !isAttacked(nb,kp[0],kp[1],opponent(color))){
            legal.push({fr:r,fc:c,tr,tc});
          }
        });
      }
    }
    return legal;
  }

  function kingInCheck(board,color){
    const kp=findKing(board,color);
    return kp ? isAttacked(board,kp[0],kp[1],opponent(color)) : false;
  }

  const VALUES={p:100,n:320,b:330,r:500,q:900,k:0};
  function evaluate(board){
    let score=0;
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const p=board[r][c]; if(!p) continue;
      let val=VALUES[p.type];
      val += (7-(Math.abs(3.5-r)+Math.abs(3.5-c)))*2;
      score += p.color==='w' ? val : -val;
    }
    return score;
  }

  function minimax(board,color,depth){
    const moves=generateLegalMoves(board,color);
    if(moves.length===0){
      if(kingInCheck(board,color)) return color==='w' ? -100000-depth : 100000+depth;
      return 0;
    }
    if(depth===0) return evaluate(board);
    let best = color==='w' ? -Infinity : Infinity;
    for(const m of moves){
      const nb=applyMoveRaw(board,m.fr,m.fc,m.tr,m.tc);
      const val=minimax(nb,opponent(color),depth-1);
      best = color==='w' ? Math.max(best,val) : Math.min(best,val);
    }
    return best;
  }

  function chooseAIMove(board,color){
    const moves=generateLegalMoves(board,color);
    if(moves.length===0) return null;
    const scored = moves.map(m=>{
      const nb=applyMoveRaw(board,m.fr,m.fc,m.tr,m.tc);
      const val=minimax(nb,opponent(color),1);
      return {m,val};
    });
    scored.sort((a,b)=> color==='b' ? a.val-b.val : b.val-a.val);
    const bestVal=scored[0].val;
    const nearBest=scored.filter(s=>Math.abs(s.val-bestVal)<=30);
    return nearBest[Math.floor(Math.random()*nearBest.length)].m;
  }

  const GLYPHS={
    w:{p:'♙',n:'♘',b:'♗',r:'♖',q:'♕',k:'♔'},
    b:{p:'♟',n:'♞',b:'♝',r:'♜',q:'♛',k:'♚'}
  };

  let board, pieces, pieceIdSeq, turn, selected, gameOver;

  function initChess(){
    board = initialBoard();
    pieces = [];
    pieceIdSeq = 0;
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const p=board[r][c];
      if(p) pieces.push({id:pieceIdSeq++, type:p.type, color:p.color, r, c});
    }
    turn='w';
    selected=null;
    gameOver=false;
    statusEl.textContent = "you're white — make a move";
    buildBoardDOM();
    renderPieces();
  }

  function buildBoardDOM(){
    boardEl.innerHTML='';
    for(let r=0;r<8;r++) for(let c=0;c<8;c++){
      const sq=document.createElement('div');
      sq.className='ph-sq '+((r+c)%2===0?'light':'dark');
      sq.style.left=(c*12.5)+'%';
      sq.style.top=(r*12.5)+'%';
      sq.dataset.r=r; sq.dataset.c=c;
      const btn=document.createElement('button');
      btn.className='ph-sq-btn';
      btn.addEventListener('click', ()=>onSquareClick(r,c));
      sq.appendChild(btn);
      boardEl.appendChild(sq);
    }
  }

  function squareEl(r,c){
    return boardEl.querySelector(`.ph-sq[data-r="${r}"][data-c="${c}"]`);
  }

  function clearOverlays(){
    boardEl.querySelectorAll('.ph-sq').forEach(sq=>{
      sq.classList.remove('selected','check');
      const dots=sq.querySelectorAll('.ph-dot'); dots.forEach(d=>d.remove());
    });
  }

  function renderPieces(){
    const seen=new Set();
    pieces.forEach(p=>{
      seen.add(p.id);
      let el=document.getElementById('ph-piece-'+p.id);
      if(!el){
        el=document.createElement('div');
        el.id='ph-piece-'+p.id;
        el.className='ph-piece '+p.color;
        boardEl.appendChild(el);
      }
      el.textContent = GLYPHS[p.color][p.type];
      el.style.left=(p.c*12.5)+'%';
      el.style.top=(p.r*12.5)+'%';
      el.classList.remove('captured');
    });
    boardEl.querySelectorAll('.ph-piece').forEach(el=>{
      const id=parseInt(el.id.replace('ph-piece-',''),10);
      if(!seen.has(id) && !el.classList.contains('captured')){
        el.classList.add('captured');
        setTimeout(()=>el.remove(), 240);
      }
    });
  }

  function updateCheckHighlight(){
    boardEl.querySelectorAll('.ph-sq').forEach(sq=>sq.classList.remove('check'));
    if(kingInCheck(board, turn)){
      const kp=findKing(board,turn);
      if(kp) squareEl(kp[0],kp[1]).classList.add('check');
    }
  }

  function onSquareClick(r,c){
    if(gameOver || turn!=='w') return;
    const legalAll = generateLegalMoves(board,'w');
    if(selected){
      const move = legalAll.find(m=>m.fr===selected[0]&&m.fc===selected[1]&&m.tr===r&&m.tc===c);
      if(move){
        doMove(move);
        selected=null;
        clearOverlays();
        updateCheckHighlight();
        return;
      }
      const p=board[r][c];
      if(p && p.color==='w'){ selected=[r,c]; highlightSelection(legalAll); return; }
      selected=null; clearOverlays(); updateCheckHighlight();
      return;
    }
    const p=board[r][c];
    if(p && p.color==='w'){ selected=[r,c]; highlightSelection(legalAll); }
  }

  function highlightSelection(legalAll){
    clearOverlays();
    updateCheckHighlight();
    squareEl(selected[0],selected[1]).classList.add('selected');
    legalAll.filter(m=>m.fr===selected[0]&&m.fc===selected[1]).forEach(m=>{
      const sq=squareEl(m.tr,m.tc);
      const dot=document.createElement('div');
      dot.className='ph-dot'+(board[m.tr][m.tc]?' capture':'');
      sq.appendChild(dot);
    });
  }

  function doMove(move){
    const {fr,fc,tr,tc}=move;
    const capturedObj = pieces.find(p=>p.r===tr && p.c===tc);
    if(capturedObj) pieces = pieces.filter(p=>p!==capturedObj);
    const movingObj = pieces.find(p=>p.r===fr && p.c===fc);
    movingObj.r=tr; movingObj.c=tc;
    if(movingObj.type==='p' && (tr===0||tr===7)) movingObj.type='q';
    board = applyMoveRaw(board,fr,fc,tr,tc);
    renderPieces();
    turn = opponent(turn);
    afterMove();
  }

  function afterMove(){
    const legal = generateLegalMoves(board,turn);
    if(legal.length===0){
      gameOver=true;
      if(kingInCheck(board,turn)){
        statusEl.textContent = turn==='w' ? "checkmate — the engine wins" : "checkmate — you win";
      } else {
        statusEl.textContent = "stalemate — draw";
      }
      updateCheckHighlight();
      return;
    }
    if(kingInCheck(board,turn)){
      statusEl.textContent = (turn==='w' ? "you're" : "engine is") + " in check";
    } else {
      statusEl.textContent = turn==='w' ? "your move" : "engine thinking…";
    }
    updateCheckHighlight();
    if(turn==='b' && !gameOver){
      setTimeout(()=>{
        const m=chooseAIMove(board,'b');
        if(m) doMove(m);
      }, 450 + Math.random()*350);
    }
  }

})();
