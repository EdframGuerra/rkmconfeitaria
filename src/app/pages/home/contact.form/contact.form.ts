import { Component, OnInit } from '@angular/core';
import { InterfaceContactFormData } from './../../../models/imterface.contact.form.data';

@Component({
  selector: 'app-contact-form',
  standalone: false,
  templateUrl: './contact.form.html',
  styleUrl: './contact.form.css',
})
export class ContactForm implements OnInit {
  formData: InterfaceContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  modalTitle: string = '';
  modalMessage: string = '';
  private contactMessageModal: any;
  private whatsappURL: string = '';

  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      const modalElement = document.getElementById('contactMessageModal');
      if (modalElement && (window as any).bootstrap) {
        this.contactMessageModal = new (window as any).bootstrap.Modal(
          modalElement
        );

        // Escuta o fechamento do modal
        modalElement.addEventListener('hidden.bs.modal', () => {
          if (this.whatsappURL) {
            window.open(this.whatsappURL, '_blank');
            this.whatsappURL = ''; // limpa para evitar redirecionamentos duplos
          }
        });
      } else {
        console.warn(
          'Bootstrap Modal para mensagens de contato não pôde ser inicializado.'
        );
      }
    }, 0);
  }

  submitForm(): void {
    const phoneNumber = '5571986893011';

    const message =
      `Olá, meu nome é ${this.formData.name}.\n` +
      `Email: ${this.formData.email}\n` +
      `Assunto: ${this.formData.subject}\n` +
      `Mensagem: ${this.formData.message}`;

    this.whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Mostra o modal primeiro
    this.showModal(
      'Mensagem Enviada!',
      'Clique em "Fechar" para ser redirecionado ao WhatsApp.'
    );

    // Limpa o formulário após o envio
    this.formData = { name: '', email: '', subject: '', message: '' };
  }

  showModal(title: string, message: string): void {
    this.modalTitle = title;
    this.modalMessage = message;
    if (this.contactMessageModal) {
      this.contactMessageModal.show();
    } else {
      console.warn(
        `Modal de mensagem de contato não inicializado: ${title} - ${message}`
      );
    }
  }
}
