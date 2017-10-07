const solution = (isBadVersion) => {

    return (n) => {
        let start = 1, end = n;
        while (start + 1 < end) {
            let mid = Math.floor(start + (end - start) / 2);
            if (isBadVersion(mid)) {
                end = mid;
            }else {
                start = mid;
            }
        }
        if (isBadVersion(start)) {
            return start;
        } else {
            return end;
        }
    };
} ;
