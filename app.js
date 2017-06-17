let superheroData = [
  { name: 'Superman', phoneNumber: '248-909-1170', comicsAffiliation: 'DC Comics', img_url: 'https://vignette4.wikia.nocookie.net/superman/images/b/b1/Superman_Action_976_Gary_Frank.png/revision/latest/scale-to-width-down/288?cb=20170501140424'},
  { name: 'Aquaman', phoneNumber: '619-246-0021', comicsAffiliation: 'DC Comics', img_url: 'https://i956.photobucket.com/albums/ae50/Eyeballed/aquaman.jpg'},
  { name: 'Wonder Woman', phoneNumber: '909-345-7181', comicsAffiliation: 'DC Comics', img_url: 'http://pm1.narvii.com/6310/35b20d479ed02e62e05d33f3eade72d3182d1a95_hq.jpg'},
  { name: 'Spider-Man', phoneNumber: '111-7171-6049', comicsAffiliation: 'Marvel Comics', img_url: 'https://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png'},
  { name: 'Iron Man', phoneNumber: '787-494-3052', comicsAffiliation: 'Marvel Comics', img_url: 'https://www.sideshowtoy.com/wp-content/uploads/2016/04/captain-america-civil-war-iron-man-xlvi-sixth-scale-marvel-silo-902708.png'}
]

angular
  .module("superheroApp", [])
  .controller("SuperheroController", [
    SuperheroControllerFunc
  ])

function SuperheroControllerFunc () {
  this.superheroes = superheroData
  this.addSuperhero = function() {
    let superhero = {name: this.newName, phoneNumber: this.newPhoneNumber, comicsAffiliation: this.newComicAffiliation, img_url: this.newImg_url}
    this.superheroes.push(superhero)
  }
}
