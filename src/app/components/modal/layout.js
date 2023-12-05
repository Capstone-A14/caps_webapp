const Modal = ({ isShow, children, closeModal = () => {} }) => {
  return (
    <div
      id="modal_overlay"
      className={`z-40  ${
        isShow
          ? " !visible block !opacity-100"
          : "!invisible !hidden !opacity-0"
      }`}
    >
      <div
        id="modal"
        className=" fixed z-50 min-h-full min-w-full md:min-w-[82%] top-[60px] right-0 rounded-none bg-dark_blue bg-opacity-50 backdrop-blur-sm md:rounded-tl-3xl "
      >
        <div className="grid">
          <div
            className=" place-self-center place-items-center"
            onClick={closeModal}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
