export const sendReservation = async (formData) => {
  try {
    const response = await fetch('http://localhost:3000/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    console.log('Resposta do backend:', data);
    return { data, success: response.ok };
  } catch (e) {
    console.log('Erro ao enviar dados: ', e);
    return {
      success: false,
      error: 'Erro ao enviar os dados. Tente novamente mais tarde.',
    };
  }
};

export default sendReservation;
