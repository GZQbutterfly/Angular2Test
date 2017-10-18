export default class LoggerService{
  info(...msg){
    console.info.apply(console.info, msg);
  }
  error(...msg){
    console.error.apply(console.error, msg);
  }
  warn(...msg){
    console.warn.apply(console.warn, msg);
  }
}
