import { db } from './firebase-config.js';
import { collection, doc, setDoc, query, where, getDocs  } from "firebase/firestore"; 


export const addFabricationItem = (in_date, item, item_id, out_date, quantity, raw_material) => {
    const newFabricationRef = doc(collection(db,'fabrication'));

    setDoc(newFabricationRef, {
        in_date : in_date,
        item : item,
        item_id : item_id,
        out_date : out_date, 
        quantity : quantity,
        raw_material : raw_material
    })
}

export const addSubAssembly = (assembly_id, process, item_id, machine_id, start_date, end_date, is_redundant) => {
    const newFabricationRef = doc(collection(db,'sub_assembly'));

    setDoc(newFabricationRef, {
        assembly_id : assembly_id,
        process : process,
        item_id : item_id,
        machine_id : machine_id, 
        start_date : start_date,
        end_date : end_date,
        is_redundant : is_redundant
    })
}

export const addAssembly = (process_id, process, machine_id, start_date, end_date, is_redundant) => {
    const newFabricationRef = doc(collection(db,'assembly'));

    setDoc(newFabricationRef, {
        process_id : process_id,
        process : process,
        machine_id : machine_id, 
        start_date : start_date,
        end_date : end_date,
        is_redundant : is_redundant
    })
}

export const findInFabrication = (itemId, date) => {
    const q = query(collection(db, "fabrication"), where("item_id", "==", itemId));

    const results = async () => {
        await getDocs(q);
    }

    return results();
}

export const findInSubAssembly = (processId, date) => {
    const q = query(collection(db, "sub_assembly"), where("process_id", "==", processId));

    const results = async () => { 
        await getDocs(q);
    }

    return results;
}

export const getAll = async (department) => {

    var arr = [];
    let querySnapshot = '';
    if (department === 'fabrication') {
        querySnapshot = await getDocs(collection(db, "fabrication"));
    }

    querySnapshot.forEach((doc) => {
        arr.push(doc.data());
});

} 