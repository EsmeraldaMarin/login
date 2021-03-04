let signinFormHtml = `<h1>Crear Cuenta</h1>
 <form action="/signin">
   <div>
       <label for="name"></label>
       <input type="text" name="name" id="name" placeholder="Nombre">
   </div>
   <div>
       <label for="lastname"></label>
       <input type="text" name="lastname" id="lastname" placeholder="Apellido">
   </div>
   <div>
       <label for="email"></label>
       <input type="email" name="email" id="email" placeholder="Email">
   </div>
   <div>
       <label for="perfil"></label>
       <select name="perfil" id="perfil">
           <option>Seleccione un perfil</option>
           <option value="1">Administrador</option>
           <option value="0">Basico</option>
       </select>
   </div>
   <div>
       <label for="password"></label>
       <input type="password" name="password" id="password" placeholder="Contraseña">
   </div>
   <div>
       <label for="repeatPassword"></label>
       <input type="password" id="repeatPassword" placeholder="Repetir contraseña">
   </div>
   <button type="submit">Registrarse</button>
</form>
 `
let loginFormHtml = `
<h1>Iniciar Sesión</h1>
<form action="/login">
    <div>
        <label for="email"><i class="fas fa-envelope"></i></label>
        <input type="email" name="email" id="email" placeholder="Email">
    </div>
    <div>
        <label for="password"><i class="fas fa-lock"></i></label>
        <input type="password" name="password" id="password" placeholder="Password">
    </div>
    <button type="submit">Iniciar Sesión</button>
</form>
`


let moveSectionBtn = document.getElementById('moveSectionBtn')
moveSectionBtn.addEventListener('click', () => {
  let parent = moveSectionBtn.parentElement;
  let loginSect = parent.previousElementSibling;
  parent.classList.toggle('signInMode')
  loginSect.classList.toggle('signInMode')
  if (parent.classList.contains('signInMode')) {
    //h2, img, button
    parent.children[0].textContent = '¿Ya tienes una cuenta aquí?';
    parent.children[1].src = "assets/login.svg";
    parent.children[2].textContent = "Iniciar Sesión";

    setTimeout(() => {
      loginSect.innerHTML = signinFormHtml
    }, 250);

  } else {
    parent.children[0].textContent = '¿Eres nuevo/a aquí?';
    parent.children[1].src = "assets/signin.svg";
    parent.children[2].textContent = "Registrarse";
    setTimeout(() => {
      loginSect.innerHTML = loginFormHtml
    }, 250);
  }
})