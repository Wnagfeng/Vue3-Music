import wfrequest from '.';
export function Login(phone: number, password: number) {
  return wfrequest.get({
    url: '/login/cellphone',
    data: {
      phone,
      password,
    },
  });
}
