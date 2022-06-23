function handler(m) {
  this.sendContact(m.chat, '595985168557', 'KAIO', m)
  }
handler.help = ['contacto']
handler.tags = ['info']
 
handler.command = /^(contacto|owner|creator|creador|propietario|dueño)$/i

module.exports = handler
