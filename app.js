
Swal.fire({
    title: '¡Hola!',
    text: 'Nuestros amigos estan ansiosos por conocerte.',
    imageUrl: '/adopcion/img/perrito.jpg',
    imageWidth: 400,
    imageHeight: 200,
    imageAlt: 'Custom image',
  });
  document.querySelectorAll('.btn')//Manera de acceder a los elementos de un All
      .forEach(input => input.addEventListener('click', ()=>{
        run();
       async function run(){
        const { value: formValues } = await Swal.fire({
          title: 'Inicia sesión',
          html:
           '<label for="swal-input1">Usuario</label>'+
            '<input id="swal-input1" class="swal2-input">' +
            '<label for="swal-input1">Contraseña</label>'+
            '<input id="swal-input2" type="password" class="swal2-input">',
          focusConfirm: false,
          showDenyButton: true,
  showCancelButton: true,
  confirmButtonText: `Ingresar`,
  denyButtonText: `Registrarme`,
          preConfirm: () => {
            return [
              document.getElementById('swal-input1').value,
              document.getElementById('swal-input2').value
            ]
          }
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire('Saved!', '', 'success')//cuando intenta ingresar
          } else if (result.isDenied) {
            location.href = '/views/registro.html'
          }
        })
        
        
      //   if (formValues) {
      //     Swal.fire(JSON.stringify(formValues))
      //  }
      }
      }));
  