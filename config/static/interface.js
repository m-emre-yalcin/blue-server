module.exports = [
  // {
  //   path: '/save',
  //   method: 'post',
  //   controller: 'interface/save',
  //   model: 'interface,
  // },
  {
    path: '/',
    method: 'get',
    serve: {
      folder: '../interface/.next/server/pages/',
      dotfiles: 'ignore',
      etag: false,
      extensions: ['html', 'htm', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'eot', 'ttf', 'woff', 'woff2', 'otf'],
      maxAge: '1d',
    }
  },
  {
    path: '/_next',
    method: 'get',
    serve: {
      folder: '../interface/.next/',
      dotfiles: 'ignore',
      etag: false,
      extensions: ['html', 'htm', 'css', 'js', 'png', 'jpg', 'jpeg', 'gif', 'ico', 'svg', 'eot', 'ttf', 'woff', 'woff2', 'otf'],
      maxAge: '1d',
    }
  },
]