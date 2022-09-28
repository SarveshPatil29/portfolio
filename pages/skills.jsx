export default function Home({ articles }) {
    // state to show modal
    const [show, setShow] = useState({
        showModal: false,
        modalId: null,
    });

    // close the modal
    const handleClose = () => {
        setShow({
            showModal: false,
            modalId: null,
        });
    };

    // buttons
    // ? apna dictionary use karega to setButtons use karke modal me jo edit karega, wo naam daal dena
    const [buttons, setButtons] = useState([
        "REACT",
        "NODEJS",
        "EXPRESSJS",
        "MONGODB",
        "NEXTJS",
        "CLOUDINARY",
    ]);

    return (
        <div>
            <h1>Buttons</h1>
            <ul>
                {/* show buttons */}
                {buttons.map((button) => (
                    <li key={button}>
                        <Button
                            onClick={() =>
                                setShow({
                                    showModal: true,
                                    modalId: button,
                                })
                            }
                        >
                            {button}
                        </Button>
                        <hr />
                    </li>
                ))}
            </ul>

            {/* bootstrap modal */}
            <Modal show={show.showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.modalId}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
