import { Dialog, DialogContent } from '@mui/material'

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

export default AuthModal
