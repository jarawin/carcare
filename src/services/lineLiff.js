import liff from '@line/liff';
const liffId = '1657165612-5NDV6eZ0';

const logout = async () => {
  await liff.init({ liffId: liffId });

  if (liff.isLoggedIn()) {
    liff.logout();
    liff.closeWindow();
  } else {
    window.close();
  }
};

const login = async () => {
  await liff.init({ liffId: liffId });

  if (liff.isLoggedIn()) {
    const email = liff.getDecodedIDToken().email;
    const data = await liff.getProfile();
    return { ...data, email };
  } else {
    liff.login();
  }
};

const sendMessage = async (text) => {
  await liff.init({ liffId: liffId });

  if (liff.isInClient()) {
    liff
      .sendMessages([
        {
          type: 'text',
          text: text,
        },
      ])
      .then(() => {
        liff.closeWindow();
      });
  } else {
    alert('Please run this application in LINE!');
  }
};

export { sendMessage, logout, login };
