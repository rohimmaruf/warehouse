import Button from "@/components/Button"
import Modal from "@/components/Modal"
import TitleForm from "@/components/TitleForm"

const ModalDelete = ({onKeep=()=>{}, onDelete=()=>{}}) => {
    return(
    <Modal>
        <TitleForm >Delete This Product</TitleForm>
        <div className="flex">
            <Button title="Keep" varian="secondary" onClick={onKeep}/>
            <Button title="Delete" varian="danger" onClick={onDelete}/>
        </div>
        
    </Modal>
    )
}

export default ModalDelete