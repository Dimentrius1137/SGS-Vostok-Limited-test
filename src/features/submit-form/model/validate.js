export function useValidate(fields){
    const fieldsData = Object.values(fields);
    function checkValid(){
        return !fieldsData.includes(null)
    }
    const isValid = checkValid();
    return {
        isValid
    }
}
