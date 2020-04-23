// Search & Sort Functions Library

function search(anArray, item, type) {
    if (type == 'Linear') {
        // Linear search
        for (i = 0; i < anArray.length; i++) {
            if (item == anArray[i]) {
                return i;
            }
        }
        return -1;
    } else if (type == 'Binary') {
        // Binary search
        let lowerindex = 0;
        let upperindex = anArray.length;
        while (lowerindex <= upperindex) {

            let middleindex = Math.floor((lowerindex + upperindex) / 2);

            if (item == anArray[middleindex]) {
                return middleindex;
            } else if (item < anArray[middleindex]) {
                upperindex = middleindex - 1;
            } else {
                lowerindex = middleindex + 1;
            }
        }
        // nothing found
        return -1;
    }
}