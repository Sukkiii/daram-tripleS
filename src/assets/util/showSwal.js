import Swal from 'sweetalert2'

function showSwal(title, icon) {
  Swal.fire({
    title,
    icon,
    confirmButtonText: '확인',
    confirmButtonColor: '#3264ff',
    cancelButtonColor: '#e2e8f0',
  })
}

export default showSwal
