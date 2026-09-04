import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.185.1/build/three.module.js';

const POS={castle:[-18,-18],forest:[-34,-3],space:[-8,-38],pirate:[20,-35],dino:[38,-16],robot:[36,12],ocean:[26,36],race:[2,38],builder:[-21,32],hero:[-38,20],candy:[-42,2],snake:[-30,-24],caves:[-10,12],brain:[10,8],volcano:[27,-3]};

function mat(color,rough=.8){return new THREE.MeshStandardMaterial({color,roughness:rough,metalness:.05})}
function box(w,h,d,c){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat(c));m.castShadow=m.receiveShadow=true;return m}
function cyl(rt,rb,h,c,seg=8){const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,seg),mat(c));m.castShadow=m.receiveShadow=true;return m}
function sphere(r,c){const m=new THREE.Mesh(new THREE.SphereGeometry(r,16,12),mat(c));m.castShadow=m.receiveShadow=true;return m}
function addLabel(scene,text,x,z,color='#ffffff'){
 const c=document.createElement('canvas');c.width=512;c.height=128;const g=c.getContext('2d');g.clearRect(0,0,512,128);g.fillStyle='rgba(20,30,60,.72)';g.roundRect(8,18,496,92,28);g.fill();g.strokeStyle='rgba(255,255,255,.85)';g.lineWidth=5;g.stroke();g.font='900 39px system-ui';g.textAlign='center';g.textBaseline='middle';g.fillStyle=color;g.fillText(text,256,64);const tex=new THREE.CanvasTexture(c);tex.minFilter=THREE.LinearFilter;const s=new THREE.Sprite(new THREE.SpriteMaterial({map:tex,transparent:true,depthWrite:false}));s.position.set(x,7,z);s.scale.set(11,2.75,1);scene.add(s);return s;
}
function tree(x,z,s=1){const g=new THREE.Group();const trunk=cyl(.38,.5,3.3,0x805334,7);trunk.position.y=1.65;g.add(trunk);const top=cyl(.1,2.35,4.8,0x2f9d58,9);top.position.y=5;g.add(top);g.position.set(x,0,z);g.scale.setScalar(s);return g}
function flower(x,z,c){const g=new THREE.Group();const stem=cyl(.06,.06,.7,0x3e9e55,6);stem.position.y=.35;g.add(stem);const pet=sphere(.18,c);pet.position.y=.82;g.add(pet);g.position.set(x,0,z);return g}
function rock(x,z,s=.8){const m=new THREE.Mesh(new THREE.DodecahedronGeometry(s,0),mat(0x8192a0));m.position.set(x,s*.55,z);m.scale.y=.7;m.castShadow=true;return m}
function castle(x,z){const g=new THREE.Group();const base=box(8,5,6,0x8467d7);base.position.y=2.5;g.add(base);for(const dx of [-3.5,3.5]){const t=cyl(1.5,1.6,7,0x7456c9,8);t.position.set(dx,3.5,0);g.add(t);const roof=new THREE.Mesh(new THREE.ConeGeometry(1.9,2.8,8),mat(0xff678d));roof.position.set(dx,8.2,0);g.add(roof)}const door=box(2.2,3.2,.35,0x342b5f);door.position.set(0,1.6,3.15);g.add(door);g.position.set(x,0,z);return g}
function lab(x,z){const g=new THREE.Group();const b=box(8,4,6,0xe8f0ff);b.position.y=2;g.add(b);const dome=new THREE.Mesh(new THREE.SphereGeometry(2.6,20,12,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:0x7d67da,transparent:true,opacity:.78,roughness:.4}));dome.position.set(0,4,0);g.add(dome);g.position.set(x,0,z);return g}
function volcano(x,z){const g=new THREE.Group();const cone=new THREE.Mesh(new THREE.ConeGeometry(6,10,18,1,true),mat(0x69463d));cone.position.y=5;g.add(cone);const lava=cyl(1.3,1.8,.5,0xff5f3d,18);lava.position.y=9.7;g.add(lava);g.position.set(x,0,z);return g}
function rocket(x,z){const g=new THREE.Group();const body=cyl(.9,1.2,5,0xf4f6ff,16);body.position.y=3.6;g.add(body);const nose=new THREE.Mesh(new THREE.ConeGeometry(.9,2,16),mat(0xff6d80));nose.position.y=7.1;g.add(nose);const flame=new THREE.Mesh(new THREE.ConeGeometry(.55,1.5,12),new THREE.MeshBasicMaterial({color:0xffa33c}));flame.rotation.x=Math.PI;flame.position.y=.4;flame.userData.flame=true;g.add(flame);g.position.set(x,0,z);return g}
function portal(x,z,color){const g=new THREE.Group();const ring=new THREE.Mesh(new THREE.TorusGeometry(3,0.45,12,32),new THREE.MeshStandardMaterial({color,emissive:color,emissiveIntensity:.25,roughness:.35}));ring.rotation.y=Math.PI/2;ring.position.y=3.5;g.add(ring);const glow=new THREE.PointLight(color,1.4,18);glow.position.y=3.5;g.add(glow);g.position.set(x,0,z);return g}
function marker(type,x,z){if(type==='castle')return castle(x,z);if(type==='brain')return lab(x,z);if(type==='volcano')return volcano(x,z);if(type==='space')return rocket(x,z);const colors={forest:0x34a85a,pirate:0xd79e42,dino:0x67b84f,robot:0x6b7d95,ocean:0x27aada,race:0xff625d,builder:0xe79d39,hero:0xe44d85,candy:0xff8ec6,snake:0x4db85b,caves:0x3a4b68};return portal(x,z,colors[type]||0x6f60e8)}
function makeHero(){const g=new THREE.Group();const body=box(1.35,1.9,.85,0x4e78e6);body.position.y=2.05;g.add(body);const head=sphere(.72,0xeeb27d);head.position.y=3.55;g.add(head);const hair=new THREE.Mesh(new THREE.SphereGeometry(.75,16,10,0,Math.PI*2,0,Math.PI/2),mat(0x352739));hair.rotation.x=Math.PI;hair.position.y=3.77;g.add(hair);const armL=box(.38,1.45,.38,0xeeb27d),armR=armL.clone();armL.position.set(-.88,2.1,0);armR.position.set(.88,2.1,0);g.add(armL,armR);const legL=box(.42,1.35,.5,0x24365e),legR=legL.clone();legL.position.set(-.35,.62,0);legR.position.set(.35,.62,0);g.add(legL,legR);g.userData={armL,armR,legL,legR};g.scale.setScalar(1.25);return g}

export function createHub3D({canvas,ZONES,state,onNearChange,onCollect}){
 const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:false,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.8));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.1;
 const scene=new THREE.Scene();scene.background=new THREE.Color(0x8fdcff);scene.fog=new THREE.Fog(0x9ee0ff,45,115);
 const camera=new THREE.PerspectiveCamera(55,1,.1,220);camera.position.set(0,14,18);
 scene.add(new THREE.HemisphereLight(0xcdf5ff,0x5b7240,2.25));const sun=new THREE.DirectionalLight(0xfff0c7,3.2);sun.position.set(-28,40,18);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-55;sun.shadow.camera.right=55;sun.shadow.camera.top=55;sun.shadow.camera.bottom=-55;scene.add(sun);
 const ground=new THREE.Mesh(new THREE.CircleGeometry(58,64),mat(0x6dbb61));ground.rotation.x=-Math.PI/2;ground.receiveShadow=true;scene.add(ground);
 const beach=new THREE.Mesh(new THREE.RingGeometry(53,58,64),mat(0xf2d28a));beach.rotation.x=-Math.PI/2;beach.position.y=.02;scene.add(beach);
 const ocean=new THREE.Mesh(new THREE.CircleGeometry(110,64),new THREE.MeshStandardMaterial({color:0x42bfe8,roughness:.25,metalness:.08,transparent:true,opacity:.92}));ocean.rotation.x=-Math.PI/2;ocean.position.y=-.5;scene.add(ocean);
 const plaza=new THREE.Mesh(new THREE.CircleGeometry(11,48),mat(0xeacb87));plaza.rotation.x=-Math.PI/2;plaza.position.y=.03;scene.add(plaza);
 // paths from centre
 for(const [id,[x,z]] of Object.entries(POS)){const len=Math.hypot(x,z),ang=Math.atan2(x,z);const p=box(3.5,.12,len,0xe9ca83);p.position.set(x/2,.08,z/2);p.rotation.y=ang;scene.add(p)}
 // landmarks + labels
 const zoneObjs=[];for(const z of ZONES){const p=POS[z.id];if(!p)continue;const obj=marker(z.id,p[0],p[1]);scene.add(obj);addLabel(scene,z.name,p[0],p[1]+5);zoneObjs.push({z,x:p[0],zz:p[1],obj})}
 // hero home
 const home=box(5,3,4,0xffdf8d);home.position.set(0,1.5,0);scene.add(home);const homeRoof=new THREE.Mesh(new THREE.ConeGeometry(4.1,2.5,4),mat(0xff8b65));homeRoof.rotation.y=Math.PI/4;homeRoof.position.set(0,4,0);scene.add(homeRoof);addLabel(scene,'Hero Home',0,5);
 // natural scenery
 for(let i=0;i<78;i++){const a=i*2.399,r=13+(i*17)%37,x=Math.sin(a)*r,z=Math.cos(a)*r;if(zoneObjs.some(q=>Math.hypot(x-q.x,z-q.zz)<6))continue;scene.add(tree(x,z,.75+((i*7)%8)/10))}
 for(let i=0;i<50;i++){const a=i*1.71,r=9+(i*13)%43;scene.add(rock(Math.sin(a)*r,Math.cos(a)*r,.35+((i*3)%7)/10))}
 for(let i=0;i<80;i++){const a=i*1.23,r=6+(i*11)%44;scene.add(flower(Math.sin(a)*r,Math.cos(a)*r,[0xff6c9d,0xffd34d,0x8a6bff,0xffffff][i%4]))}
 const hero=makeHero();scene.add(hero);hero.position.set(0,0,4);
 const pet=sphere(.45,0xffd45b);pet.position.set(-1,0.45,5.5);scene.add(pet);
 // coins as 3D objects
 const coins=[];for(let i=0;i<30;i++){const a=i*2.1,r=7+(i*9)%42;const coin=new THREE.Mesh(new THREE.CylinderGeometry(.42,.42,.12,20),new THREE.MeshStandardMaterial({color:0xffd54a,metalness:.6,roughness:.35,emissive:0x5f4300,emissiveIntensity:.15}));coin.rotation.z=Math.PI/2;coin.position.set(Math.sin(a)*r,1.1,Math.cos(a)*r);scene.add(coin);coins.push({m:coin,taken:false})}
 const clouds=[];for(let i=0;i<12;i++){const g=new THREE.Group();for(const [dx,dy,s] of [[0,0,1],[1.6,.2,.8],[-1.4,.25,.72]]){const q=sphere(1.6*s,0xffffff);q.position.set(dx,dy,0);q.material.transparent=true;q.material.opacity=.9;g.add(q)}g.position.set(-45+i*8,18+(i%3)*2,-35+(i%4)*18);scene.add(g);clouds.push(g)}
 const clock=new THREE.Clock();let near=null,jumpV=0,vy=0,walk=0;
 function resize(){const r=canvas.getBoundingClientRect(),w=Math.max(1,r.width),h=Math.max(1,r.height);renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix()}
 const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
 function update(dt,input){
  const speed=input.run?10.5:7.2;const mag=Math.hypot(input.x,input.y);let moving=mag>.08;if(moving){const ix=input.x/mag,iz=input.y/mag;hero.position.x+=ix*speed*dt;hero.position.z+=iz*speed*dt;const d=Math.hypot(hero.position.x,hero.position.z);if(d>52){hero.position.x*=52/d;hero.position.z*=52/d}hero.rotation.y=Math.atan2(ix,iz);walk+=dt*10}
  if(input.jump&&hero.position.y<=.01){jumpV=7.2}
  jumpV-=18*dt;hero.position.y=Math.max(0,hero.position.y+jumpV*dt);if(hero.position.y===0&&jumpV<0)jumpV=0;
  const u=hero.userData;if(moving){u.armL.rotation.x=Math.sin(walk)*.75;u.armR.rotation.x=-Math.sin(walk)*.75;u.legL.rotation.x=-Math.sin(walk)*.6;u.legR.rotation.x=Math.sin(walk)*.6}else{u.armL.rotation.x*=.8;u.armR.rotation.x*=.8;u.legL.rotation.x*=.8;u.legR.rotation.x*=.8}
  pet.position.lerp(new THREE.Vector3(hero.position.x-1.4*Math.sin(hero.rotation.y),.45,hero.position.z-1.4*Math.cos(hero.rotation.y)),Math.min(1,dt*5));
  for(const c of clouds){c.position.x+=dt*.7;if(c.position.x>60)c.position.x=-60}
  for(const q of coins){if(q.taken)continue;q.m.rotation.y+=dt*4;q.m.position.y=1.15+Math.sin(performance.now()*.004+q.m.position.x)*.18;if(hero.position.distanceTo(q.m.position)<1.35){q.taken=true;q.m.visible=false;onCollect?.()}}
  let n=null,best=999;for(const q of zoneObjs){const d=Math.hypot(hero.position.x-q.x,hero.position.z-q.zz);if(d<4.7&&d<best){best=d;n=q.z}}if(Math.hypot(hero.position.x,hero.position.z)<4.5)n={id:'home',name:'Hero Home',icon:'🎒'};if(n?.id!==near?.id){near=n;onNearChange?.(near)}
  const desired=new THREE.Vector3(hero.position.x-10*Math.sin(hero.rotation.y),9.5,hero.position.z-10*Math.cos(hero.rotation.y));camera.position.lerp(desired,1-Math.pow(.001,dt));const look=new THREE.Vector3(hero.position.x,2.2+hero.position.y,hero.position.z);camera.lookAt(look);
  renderer.render(scene,camera)
 }
 function setVisible(v){canvas.style.display=v?'block':'none';if(v)resize()}
 return{update,setVisible,getNear:()=>near,jump(){if(hero.position.y<=.01)jumpV=7.2},dispose(){ro.disconnect();renderer.dispose()}}
}
