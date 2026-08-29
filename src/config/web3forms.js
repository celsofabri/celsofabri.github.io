// Configuração do Web3Forms (https://web3forms.com) — envio de e-mail 100% via
// frontend (um único fetch, sem SDK e sem conectar conta de e-mail nenhuma).
// Veja o README.md para o passo a passo de como obter a chave abaixo (é
// grátis, até 250 envios/mês, e a chave chega por e-mail em segundos).
//
// Enquanto o valor continuar com o prefixo "YOUR_", o formulário de contato
// usa automaticamente um fallback via mailto: (abre o cliente de e-mail do
// visitante) em vez de tentar enviar pelo Web3Forms.

export const web3formsConfig = {
  accessKey: 'e4c5de02-86db-4f55-bb68-ff77c1e4f2c0',
}

export function isWeb3formsConfigured() {
  return !web3formsConfig.accessKey.startsWith('YOUR_')
}
