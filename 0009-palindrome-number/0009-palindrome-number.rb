# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
   
    return false if x  < 0
    
    return true if x.to_s == x.to_s.reverse
    false
    

end