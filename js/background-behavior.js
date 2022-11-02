export default function backGroundBehavior() {

  function changeBD(page) {
    var body = document.getElementsByTagName('body')[0];

    switch (page) {
      case "/universe": 
        body.style.background = 'url(../images/mountains-universe-2.png)';
        break;
      case "/exploration":
        body.style.background = 'url(../images/mountains-universe-3.png)';
        break;
      default:
        body.style.background = 'url(../images/mountains-universe-1.png)';
        break;
    }
    body.style.backgroundRepeat = "no-repeat";
    body.style.backgroundSize = "cover";
    
  }

  return {
    changeBD
  };
}
