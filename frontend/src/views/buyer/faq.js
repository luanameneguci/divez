import React, { useState, useRef } from "react";
import Select from 'react-select';


const FileUpload = () => {
  // Hooks de estado para gerir o ficheiro selecionado e a sua pré-visualização
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(); // Referência para o input de ficheiros

  // Função que gere o carregamento de ficheiros quando o utilizador seleciona um
  const handleFileUpload = (event) => {
    const inputFile = event.target.files[0];
    if (inputFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); // Define a pré-visualização da imagem
        setFile(inputFile); // Guarda o ficheiro selecionado
        setIsUploadVisible(false); // Esconde o elemento de upload
      };
      reader.readAsDataURL(inputFile); // Lê o ficheiro como uma URL de dados
    } else {
      removeUpload(); // Remove o carregamento se não houver ficheiro selecionado
    }
  };

  // Estado para controlar a visibilidade do elemento de upload
  const [isUploadVisible, setIsUploadVisible] = useState(true);

  // Remove o ficheiro carregado e a pré-visualização
  const removeUpload = () => {
    setFile(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Limpa o valor do input
    }
    setIsUploadVisible(true); // Mostra o elemento de upload novamente
  };

  // Função que gere o evento de arrastar sobre a área de carregamento para prevenir o comportamento por defeito
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Função que gere o evento de soltar ficheiros na área de carregamento
  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles.length) {
      handleFileUpload({ target: { files: droppedFiles } }); // Processa o ficheiro soltado
    }
  };

  // Hook de estado para gerir qual div está ativo, por defeito o primeiro
  const [activeDiv, setActiveDiv] = useState(1);

  // Função que gere o clique nos botões para mudar o div ativo
  const handleButtonClick = (event) => {
    const divId = parseInt(event.target.id.replace("button-", ""), 10);
    setActiveDiv(divId);
  };

  // Devolve o estilo para os botões, mudando a cor conforme o div ativo
  const getButtonStyle = (buttonId) => {
    return {
      backgroundColor: activeDiv === buttonId ? "#10ccf4" : "white",
      color: activeDiv === buttonId ? "white" : "black",
    };
  };

  // Guarda as categorias dos tickets para usar no select
  const options = [
    { value: 'instalation', label: 'Instalation' },
    { value: 'licenses', label: 'Licenses' },
    { value: 'payment', label: 'Payment' }
  ]

  return (
    <section class="bsb-faq-3 py-3 py-md-5 py-xl-8">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 class="mb-4 display-5 text-center">
              <b>
                Having some troubles?
                <br />
                Let’s see if we can help you on a easier way
              </b>
            </h2>
            <p class="mb-5 text-center">
              In order to help you, we provide several frequently asked
              questions to help you resolve your problem more easily and
              quickly.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 roundbg shadow m-4">
        <p className="my-auto">
          <b>1. FAQ</b>
        </p>
      </div>

      <div className="col-7 d-flex justify-content-around my-5 mx-auto">
        <button
          id="button-1"
          onClick={handleButtonClick}
          style={getButtonStyle(1)}
          className="hover roundbg py-3 px-4 border-0 mx-4 shadow col-3 text-center"
        >
          <b style={{ pointerEvents: "none" }}>Installation</b>
        </button>
        <button
          id="button-2"
          onClick={handleButtonClick}
          style={getButtonStyle(2)}
          className="hover roundbg py-3 px-4 border-0 mx-4 shadow col-3 text-center"
        >
          <b style={{ pointerEvents: "none" }}>Licenses</b>
        </button>
        <button
          id="button-3"
          onClick={handleButtonClick}
          style={getButtonStyle(3)}
          className="hover roundbg py-3 px-4 border-0 mx-4 shadow col-3 text-center"
        >
          <b style={{ pointerEvents: "none" }}>Payment</b>
        </button>
      </div>

      <div class="mb-8" style={{ display: activeDiv === 1 ? "block" : "none" }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-xl-10">
              <div class="accordion accordion-flush" id="faqAccount">
                <div class="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading1">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse1"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse1"
                    >
                      What is an account?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading1"
                  >
                    <div class="accordion-body">
                      <p>
                        An account is a personal or organizational record that
                        allows you to access and manage various services, often
                        requiring authentication through a username and
                        password.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading2">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse2"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse2"
                    >
                      How do I create an account?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading2"
                  >
                    <div class="accordion-body">
                      <p>
                        To create an account, visit the website or application
                        and look for a "Sign Up" or "Create Account" button.
                        Follow the instructions to enter your information and
                        create a username and password.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading3">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse3"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse3"
                    >
                      How do I secure my account?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading3"
                  >
                    <div class="accordion-body">
                      <p>
                        To secure your account, use a robust and unique
                        password, enable two-factor authentication if available,
                        and be cautious about sharing your login information.
                        Regularly update your password and avoid using easily
                        guessable information like birthdays or names.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading4">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse4"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse4"
                    >
                      What should I do if I forget my password?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading4"
                  >
                    <div class="accordion-body">
                      <p>
                        If you forget your password, most websites and services
                        offer a "Forgot Password" or "Reset Password" option.
                        Follow the steps to reset your password, often involving
                        an email or SMS verification.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqAccountHeading5">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqAccountCollapse5"
                      aria-expanded="false"
                      aria-controls="faqAccountCollapse5"
                    >
                      What should I do if my account is compromised or hacked?
                    </button>
                  </h2>
                  <div
                    id="faqAccountCollapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqAccountHeading5"
                  >
                    <div class="accordion-body">
                      <p>
                        If you suspect your account has been compromised, change
                        your password immediately. Contact the service provider
                        for further assistance, and consider enabling two-factor
                        authentication for added security.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-8" style={{ display: activeDiv === 2 ? "block" : "none" }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-xl-10">
              <div class="accordion accordion-flush" id="faqOrder">
                <div class="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading1">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse1"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse1"
                    >
                      Do I need to create an account to place an order?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading1"
                  >
                    <div class="accordion-body">
                      <p>
                        You can order as a guest if you create an account.
                        However, creating an account allows for faster checkout
                        and order tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading2">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse2"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse2"
                    >
                      Can I change or cancel my order after it's been placed?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading2"
                  >
                    <div class="accordion-body">
                      <p>
                        Orders can be modified or canceled within a short time
                        after placing them. Contact our customer support as soon
                        as possible to make any changes.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading3">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse3"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse3"
                    >
                      What payment methods do you accept?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading3"
                  >
                    <div class="accordion-body">
                      <p>
                        We accept various payment methods, including
                        credit/debit cards, PayPal, and other online payment
                        options. You can choose your preferred payment method
                        during the checkout process.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading4">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse4"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse4"
                    >
                      Is my payment information secure?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading4"
                  >
                    <div class="accordion-body">
                      <p>
                        Yes, we take security seriously. We use
                        industry-standard encryption to protect your payment
                        information, and we do not store your payment details on
                        our servers.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqOrderHeading5">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqOrderCollapse5"
                      aria-expanded="false"
                      aria-controls="faqOrderCollapse5"
                    >
                      How do I track the status of my order?
                    </button>
                  </h2>
                  <div
                    id="faqOrderCollapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqOrderHeading5"
                  >
                    <div class="accordion-body">
                      <p>
                        You can track your order by logging into your account
                        (if you have one) and accessing the order history. We'll
                        also send you email updates as your order progresses
                        through the fulfillment process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mb-0" style={{ display: activeDiv === 3 ? "block" : "none" }}>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-11 col-xl-10">
              <div class="accordion accordion-flush" id="faqRefund">
                <div class="accordion-item bg-transparent border-top border-bottom py-3">
                  <h2 class="accordion-header" id="faqRefundHeading1">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqRefundCollapse1"
                      aria-expanded="false"
                      aria-controls="faqRefundCollapse1"
                    >
                      How do I request a refund or exchange?
                    </button>
                  </h2>
                  <div
                    id="faqRefundCollapse1"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqRefundHeading1"
                  >
                    <div class="accordion-body">
                      <p>
                        To request a refund or exchange, please follow these
                        steps:
                      </p>
                      <ul>
                        <li>
                          Contact our customer support team within 30 days of
                          the purchase.
                        </li>
                        <li>
                          Provide your order number and a detailed reason for
                          the request.
                        </li>
                        <li>
                          Wait for our customer support team to assess your
                          request and provide further instructions.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqRefundHeading2">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqRefundCollapse2"
                      aria-expanded="false"
                      aria-controls="faqRefundCollapse2"
                    >
                      What items are eligible for a refund or exchange?
                    </button>
                  </h2>
                  <div
                    id="faqRefundCollapse2"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqRefundHeading2"
                  >
                    <div class="accordion-body">
                      <p>
                        Eligible items for a refund or exchange must meet the
                        following criteria:
                      </p>
                      <ul>
                        <li>
                          They are in their original condition, unused, and in
                          their original packaging.
                        </li>
                        <li>
                          The request is made within the specified timeframe.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqRefundHeading3">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqRefundCollapse3"
                      aria-expanded="false"
                      aria-controls="faqRefundCollapse3"
                    >
                      What if I receive a damaged or defective item?
                    </button>
                  </h2>
                  <div
                    id="faqRefundCollapse3"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqRefundHeading3"
                  >
                    <div class="accordion-body">
                      <p>
                        If you receive a damaged or defective item, please
                        contact our customer support team immediately. We will
                        guide you on the return process and offer a refund or
                        replacement, as appropriate.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqRefundHeading4">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqRefundCollapse4"
                      aria-expanded="false"
                      aria-controls="faqRefundCollapse4"
                    >
                      Who covers the shipping costs for exchanges?
                    </button>
                  </h2>
                  <div
                    id="faqRefundCollapse4"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqRefundHeading4"
                  >
                    <div class="accordion-body">
                      <p>
                        Shipping costs for returning the item for an exchange
                        and sending the new item are usually the responsibility
                        of the customer, unless the exchange is due to an error
                        on our part.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item bg-transparent border-bottom py-3">
                  <h2 class="accordion-header" id="faqRefundHeading5">
                    <button
                      class="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqRefundCollapse5"
                      aria-expanded="false"
                      aria-controls="faqRefundCollapse5"
                    >
                      Can I change my mind and cancel my refund or exchange
                      request?
                    </button>
                  </h2>
                  <div
                    id="faqRefundCollapse5"
                    class="accordion-collapse collapse"
                    aria-labelledby="faqRefundHeading5"
                  >
                    <div class="accordion-body">
                      <p>
                        If you change your mind about a refund or exchange
                        request, please contact our customer support team as
                        soon as possible. We will do our best to accommodate
                        your request, but once a refund or exchange is
                        processed, it may not be reversible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container mt-5">
        <div class="row justify-content-md-center">
          <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h2 class="mb-4 display-5 text-center">
              <b>Have you still not been able to resolve your problem?</b>
            </h2>
            <p class="mb-5 text-center">
              In addition to the FAQ's, we have a way for you to contact our
              specialist technicians to help you in the best way possible.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-4 roundbg shadow m-4">
        <p className="my-auto">
          <b>2. Tickets</b>
        </p>
      </div>

      <div className="file-upload mx-auto col-10 text-center bg-white shadow roundbg p-4">
        <form>
          <h5 class="mb-4 text-center col-10 mx-auto mt-3">
            <b>
              Select the category to your ticket to help you get a faster
              response{" "}
            </b>
          </h5>

          <div className="col-12 d-flex justify-content-around my-5 mx-auto">
            <Select options={options} />
          </div>

          <div className="form-group col-10 mx-auto">
            <textarea
              className="form-control mb-4 border-info"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Description"
            ></textarea>
          </div>
          <div>
            {isUploadVisible && (
              <div>
                <button
                  className="file-upload-btn bg-info border-0 roundbg p-3 hover my-3"
                  style={{ color: "white" }}
                  type="button"
                  onClick={() =>
                    fileInputRef.current && fileInputRef.current.click()
                  }
                >
                  Add Image
                </button>

                <div
                  className="image-upload-wrap text-center col-6 mx-auto border-2 roundbg border-secondary position-relative d-flex justify-content-center"
                  style={{ height: "15vh", borderStyle: "dashed" }}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    className="file-upload-input position-relative w-100 h-100"
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept="image/png, image/jpeg"
                    style={{ opacity: 0, left: 0 }}
                  />
                  <div
                    className="drag-text p-4 position-absolute"
                    style={{ pointerEvents: "none" }}
                  >
                    <h3>Drag and drop a file or select Add Image</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
          {file && (
            <div className="file-upload-content">
              <img
                className="file-upload-image roundbg"
                src={imagePreview}
                alt="Uploaded"
              />
              <div className="image-title-wrap">
                <button
                  type="button"
                  onClick={removeUpload}
                  className="remove-image bg-danger border-0 roundbg p-3 hover mt-3"
                >
                  Remove <span className="image-title">{file.name}</span>
                </button>
              </div>
            </div>
          )}

          <button
            type="submit"
            class="btn btn-info mt-4 p-3 w-100"
            style={{ color: "white" }}
          >
            Send Ticket
          </button>
        </form>
      </div>
    </section>
  );
};

export default FileUpload;
