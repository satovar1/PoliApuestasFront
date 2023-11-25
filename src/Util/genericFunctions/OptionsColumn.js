/**
 * Generacion de opciones Edicion y Eliminacion En la Tabla de Datos
 * @param {Integer} getValue 
 * @param {CallBack} handleEdit 
 * @param {CallBack} deleteAPISInfo 
 * @param {String} url 
 * @param {String} section 
 * @returns {HTMLElement}
 */
export const OptionsColumn = (getValue, handleEdit, deleteAPISInfo, url, section) => {
    return (
        <div style={{ fontSize: '20px' }}>
            <i className="bi bi-pen-fill"
                onClick={() => handleEdit(getValue)}>
            </i>
            <i className="bi bi-x-circle-fill m-2"
                onClick={() => { deleteAPISInfo && deleteAPISInfo(getValue, url, section) }}>
            </i>
        </div>
    );
};