public class FormatadorCep {
    public static void main(String[] args) {
        try {
            String  cepFormatado = formatarCep("61887327");
            System.out.println(cepFormatado);
        } catch (CepException e) {
            
            System.out.println("O Cep informado está inválido");
        }
    }

    static String formatarCep(String cep) throws CepException{
        if(cep.length() != 8)
        throw new CepException();

        return "23.765-064";
        
    }
}
