export default function (context) {
  if (process.server) {
      if(!context.req.session || !context.req.session.isAuth){
         return context.redirect('/')
      }
  } else if (!context.store.state.authenticated) {
    return context.redirect('/')
  }
}
