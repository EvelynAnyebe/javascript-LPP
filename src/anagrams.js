const are_anagrams=(string1, string2)=>{
    if(string1.length!==string2.length){
        return false;
    }
    freq1={}
    freq2={}
    for (let ch of string1){
        if(ch in freq1)
            freq1[ch]+=1
        else
            freq1[ch]=1    
    } 

    for (let ch of string2){
        if(ch in freq2)
            freq2[ch]+=1
        else
            freq2[ch]=1    
    }

    for (item in freq1){
        if(!freq2[item] || freq1[item] !==freq2[item])
            return false
    }

    return true;
}

const are_anagrams_by_sorting=(string1, string2)=>{
    if(string1.length!==string2.length){
        return false;
    }
    
    if(string1.split('').sort()!==string2.split('').sort()){
        return false
    }

    return true
}

console.log(are_anagrams_by_sorting("nameless","salesmen"));