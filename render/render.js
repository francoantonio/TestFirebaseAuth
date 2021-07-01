export const showAlert = (nodo, text, type = 'danger', time = 2000) => {
	nodo.innerHTML = `
    <div class="alert alert-${type}">
    ${text}
    </div>
    `;
	setTimeout(() => {
		nodo.innerHTML = '';
	}, time);
};
export const renderLogin = (user) => {
	document.querySelector('.container').innerHTML = `
  <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center ">
      <img src="${
				!user.photoURL
					? 'https://lh3.googleusercontent.com/proxy/qn1ETHAXlrr2SVi8unX0E0j25S2UCq11_IfiMtVKYbW4IdTlfdOZkKbWpQ0ii7TNTjN9s4IXKyAcYoUmYkgKhTJji4bi2_0uB46YupBpz0ICWF-CzpbfU1UISILc'
					: user.photoURL
			}" class="img-fluid rounded-circle " alt="${
		!user.displayName ? 'No Posee' : user.displayName
	}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${user.displayName}</h5>
        <p class="card-text">Correo : ${user.email}.</p>
        <p class="card-text">Numero de Telefono : ${!user.phoneNumber && 'No Posee'}.</p>
        <p class="card-text"><small class="text-muted">Email Verificado : ${
					user.emailVerified
				}</small></p>
      </div>
    </div>
  </div>
  <div>
  <button class="btn btn-danger" id="salir">Salir</button></div>
</div>
`;
};
export const renderHome = () => {
	document.querySelector('.container').innerHTML = `	<div class="col-6 mt-2">
				<h2>Login</h2>
				<form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email</label>
						<input type="email" class="form-control" id="Email" />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control" id="Password" />
					</div>
					<div class="mb-3 form-check">
						<input type="checkbox" class="form-check-input" id="exampleCheck1" />
						<label class="form-check-label" for="exampleCheck1">Check me out</label>
					</div>
					<div>
						<a href="#">Olvide mi contraseña</a>
					</div>
					<div class="row">
						<button type="button" id="LogoutWhitEmail" class="btn btn-primary">
							Ingresar
						</button>
						<button type="button" id="LogoutGoogle" class="btn btn-danger">Google</button>
						<button type="button" id="Registro" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal">Registro</button>
					</div>
				</form>
				<div class="mt-2" id="alert-test"></div>
			</div>



<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Registro</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
	  <form>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email</label>
						<input type="email" class="form-control RPassword" />
					</div>
					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Password</label>
						<input type="password" class="form-control RPassword"  />
					</div>

					<div class="mb-3">
						<label for="exampleInputPassword1" class="form-label">Repeat password</label>
						<input type="password" class="form-control RPassword" />
					</div>


					<div class="row">
						<button type="button" id="sendDataRegistro"  class="btn btn-primary">
							Enviar
						</button>
					</div>
				</form>
      </div>
      <div class="modal-footer" id='AlerRegis'>
       
      </div>
    </div>
  </div>
</div>
`;
};
