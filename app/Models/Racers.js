export class Racer {
  constructor(name, picture) {
    this.name= name,
    this.picture= picture,
    this.number= Math.floor(Math.random() * 100),
    this.distance= 0
  }

  get Template() {
    return `   
    <div class="col-12 track  ">
     <span id="${this.number}" class=" fs-5 align-middle">${this.picture}</span>
    </div>`
  }

  move(id) {
    document.getElementById(id).style.paddingLeft = this.distance + '%'
    // console.log(document.getElementById(id).style.paddingLeft ); 
    
  }
}