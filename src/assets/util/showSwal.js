import Swal from 'sweetalert2'

function showSwal(title, icon) {
  Swal.fire({
    title,
    icon,
    confirmButtonText: '확인',
  })
}

export default showSwal
