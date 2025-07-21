import { Component, OnInit } from '@angular/core';
import { InterfaceContactFormData } from './../../../models/imterface.contact.form.data';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact.form.html',
  styleUrl: './contact.form.css'
})
export class ContactForm implements OnInit {
  formData: InterfaceContactFormData = { // Modelo para o formulário
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  modalTitle: string = '';
  modalMessage: string = '';
  private contactMessageModal: any; // Referência ao objeto modal do Bootstrap

  constructor() { }

  ngOnInit(): void {
    // Inicializa o modal do Bootstrap
    setTimeout(() => {
      const modalElement = document.getElementById('contactMessageModal');
      if (modalElement && (window as any).bootstrap) {
        this.contactMessageModal = new (window as any).bootstrap.Modal(modalElement);
      } else {
        console.warn("Bootstrap Modal para mensagens de encomenda não pôde ser inicializado.");
      }
    }, 0);
  }

  /**
   * Simula a submissão do formulário de contato.
   * Em um projeto real, aqui você enviaria os dados para um serviço de backend.
   */
  submitForm(): void {
    // Lógica de envio simulada
    console.log('Dados do formulário de contato:', this.formData);

    // Exibe modal de sucesso
    this.showModal('Mensagem Enviada!', 'Obrigado por sua mensagem! Responderemos em breve.');

    // Opcional: Limpar o formulário após o envio
    // if (contactForm) { // Você precisaria passar a referência do formulário aqui
    //   contactForm.resetForm();
    // }
  }

  /**
   * Exibe o modal com a mensagem e título fornecidos.
   * @param title Título do modal.
   * @param message Mensagem a ser exibida no modal.
   */
  showModal(title: string, message: string): void {
    this.modalTitle = title;
    this.modalMessage = message;
    if (this.contactMessageModal) {
      this.contactMessageModal.show();
    } else {
      console.warn(`Modal de mensagem de contato não inicializado: ${title} - ${message}`);
    }
  }
}
