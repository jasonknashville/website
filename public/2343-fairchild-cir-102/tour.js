const rooms = [
  [
    "exterior",
    "Exterior & porch",
    [
      1,
      2,
      3,
      4,
      5
    ],
    "THE ARRIVAL",
    "The covered front porch has room to sit and looks out toward Fairchild Circle.",
    "900,190 1014,190 1014,545 900,545"
  ],
  [
    "living",
    "Living room",
    [
      6,
      7,
      8,
      9,
      10
    ],
    "LIVING ROOM",
    "Front-facing windows and an open connection to the kitchen.",
    "690,194 892,194 892,388 690,388"
  ],
  [
    "kitchen",
    "Kitchen",
    [
      11,
      12,
      13,
      14,
      15
    ],
    "KITCHEN",
    "White cabinets, stainless steel appliances, and an island with seating.",
    "489,194 685,194 685,362 489,362"
  ],
  [
    "dining",
    "Dining area",
    [
      16,
      17
    ],
    "DINING AREA",
    "Space for a full dining table just off the kitchen.",
    "489,365 685,365 685,456 489,456"
  ],
  [
    "primary",
    "Primary bedroom",
    [
      18,
      19,
      21,
      20
    ],
    "PRIMARY SUITE",
    "The primary bedroom has a walk-in closet and direct access to the covered breezeway.",
    "160,194 356,194 356,385 300,385 300,406 160,406"
  ],
  [
    "primarybath",
    "Primary bath",
    [
      22,
      23
    ],
    "PRIMARY BATH",
    "Dual vanities and a walk-in shower.",
    "361,194 482,194 482,350 361,350"
  ],
  [
    "breezeway",
    "Covered breezeway",
    [
      24
    ],
    "PARKING ACCESS",
    "The covered breezeway connects the primary bedroom to the parking area.",
    "38,190 151,190 151,516 38,516"
  ],
  [
    "bedroom",
    "Second bedroom",
    [
      25
    ],
    "SECOND BEDROOM",
    "A second bedroom near the hall bath.",
    "690,394 891,394 891,539 690,539"
  ],
  [
    "bath",
    "Hall bath",
    [
      26
    ],
    "HALL BATH",
    "A second full bath with a tub and shower.",
    "490,463 623,463 623,539 490,539"
  ],
  [
    "laundry",
    "Laundry",
    [
      27
    ],
    "LAUNDRY",
    "In-unit laundry with overhead shelving.",
    null
  ]
];
let current=rooms[0], index=0;
const $=id=>document.getElementById(id);
const path=n=>'./photos/'+String(n).padStart(2,'0')+'.webp';
function renderPhoto(){ $('hero').src=path(current[2][index]);$('hero').alt=current[1]+' at 2343 Fairchild Circle #102, photo '+(index+1);$('count').textContent=(index+1)+' / '+current[2].length;document.querySelectorAll('.thumbnails button').forEach((b,i)=>{b.classList.toggle('selected',i===index);b.setAttribute('aria-pressed',String(i===index));});}
function select(id){current=rooms.find(r=>r[0]===id);index=0;$('room-title').textContent=current[1];$('eyebrow').textContent=current[3];$('description').textContent=current[4];$('thumbnails').replaceChildren();current[2].forEach((n,i)=>{const b=document.createElement('button');b.setAttribute('aria-label','Show '+current[1]+' photo '+(i+1));const im=document.createElement('img');im.src=path(n);im.alt='';im.loading='lazy';b.append(im);b.onclick=()=>{index=i;renderPhoto();};$('thumbnails').append(b);});document.querySelectorAll('[data-room]').forEach(el=>{const active=el.dataset.room===id;el.classList.toggle('active',active);el.setAttribute('aria-pressed',String(active));});renderPhoto();}
rooms.forEach(r=>{const b=document.createElement('button');b.className='room';b.dataset.room=r[0];b.textContent=r[1]+' ↗';b.onclick=()=>select(r[0]);$('rooms').append(b);});
document.querySelectorAll('.room-zone').forEach(el=>{el.addEventListener('click',()=>select(el.dataset.room));el.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();select(el.dataset.room);}});});
function step(n){index=(index+n+current[2].length)%current[2].length;renderPhoto();}
$('prev').onclick=()=>step(-1);$('next').onclick=()=>step(1);document.querySelector('.gallery').addEventListener('keydown',e=>{if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();step(e.key==='ArrowLeft'?-1:1);}});let start=0;const gallery=document.querySelector('.gallery');gallery.addEventListener('touchstart',e=>start=e.changedTouches[0].screenX,{passive:true});gallery.addEventListener('touchend',e=>{const delta=e.changedTouches[0].screenX-start;if(Math.abs(delta)>50)step(delta<0?1:-1);},{passive:true});select('exterior');
