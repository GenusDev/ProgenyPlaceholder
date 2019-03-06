import $ from "jquery";

export const storeInfo = user => (
  $.ajax({
    method: 'POST',
    url: '/users',
    data: { user }
  })
);
