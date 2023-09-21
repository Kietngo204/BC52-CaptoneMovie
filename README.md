# Cấu trúc project

src

- components/:

  - Chứa các component thuần về UI, được tái sử dụng ở nhiều nơi
  - Các component này thường không bao gồm logic của ứng dụng (Call API,...)
  - VD: Button, Card, Input, Header, Footer, SideBar,...

- modules/module-name/:

  - Chứa các component cấu thành một page hoặc một chức năng cụ thể

- layouts/:

  - Chứa các component layout cho react-router

- apis/:

  - setup thư viện gọi API
  - setup các hàm gọi API
