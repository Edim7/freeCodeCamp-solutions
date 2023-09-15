function titleCase(str) {
  let strings = str.split(' ');

  for(let i=0; i<strings.length; i++){
    strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1).toLowerCase();
  }

  return strings.join(' ');
}

titleCase("I'm a little tea pot");