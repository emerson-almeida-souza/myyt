import './AddVideoModal.css'

export const AddVideoModal = ({isOpen}) => {

    if (isOpen) {
        return (
        <div class="modal-container">
            <div>MODAL</div>
        </div>
        )
    }

    return null
}
