import { Dialog, DialogContent } from '@mui/material'
import PropTypes from 'prop-types'

function AuthModal({ open, onClose, children }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          height: '90%',
        },
      }}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

AuthModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default AuthModal
