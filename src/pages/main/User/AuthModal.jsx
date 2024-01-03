/* eslint-disable react/prop-types */
import { Dialog, DialogContent } from '@mui/material'

function AuthModal({ open, onClose, children }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: '90%',
          height: '65%',
        },
      }}
    >
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default AuthModal
