export class Usuario {
    
   public Id: number;
   public Login: string;
   public Senha: string;

   constructor(id: number, login: string, senha:string){
       this.Id = id;
       this.Login = login;
       this.Senha = senha;
   }
    
}
