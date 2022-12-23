const formatType = (type) => {
    let color;
   
    switch (type) {
      case 'Feu': 
        color = 'feu'; 
        break; 
      case 'Eau': 
        color = 'eau'; 
        break; 
      case 'Plante': 
        color = 'plante'; 
        break; 
      case 'Insecte': 
        color = 'insecte'; 
        break; 
      case 'Normal': 
        color = 'normal'; 
        break; 
      case 'Vol': 
        color = 'vol'; 
        break; 
      case 'Poison': 
        color = 'poison'; 
        break; 
      case 'Fée': 
        color = 'fee'; 
        break; 
      case 'Psy': 
        color = 'psy'; 
        break; 
      case 'Electrik': 
        color = 'electrik'; 
        break; 
      case 'Combat': 
        color = 'combat'; 
        break; 
      default: 
        color = 'text-bg-secondary'; 
        break; 
    }
   
    return `chip ${color}`;
  }

  export default formatType