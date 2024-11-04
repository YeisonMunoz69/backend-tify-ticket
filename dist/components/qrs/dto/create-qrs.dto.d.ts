export declare enum QRStatus {
    DESACTIVADO = 0,
    HABILITADO = 1,
    USADA = 2,
    SANCIONADA = 3,
    DUPLICADA = 4
}
export declare class CreateQrsDto {
    numQr: string;
    status: QRStatus;
    extra?: string;
}
