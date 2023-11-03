import wfrequest from '.';
export function Login(phone: string, password: string) {
  return wfrequest.get({
    url: '/login/cellphone',
    params: {
      phone,
      password,
    },
  });
}
