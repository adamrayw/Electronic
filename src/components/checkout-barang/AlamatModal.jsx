const AlamatModal = () => {

    return (
        <>
            <button className="text-blue-400 font-semibold" onClick={() => document.getElementById('my_modal_4').showModal()}>Pilih Alamat</button>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                    <p className="py-4">Click the button below to close</p>
                </div>
            </dialog>
        </>
    )
}

export default AlamatModal