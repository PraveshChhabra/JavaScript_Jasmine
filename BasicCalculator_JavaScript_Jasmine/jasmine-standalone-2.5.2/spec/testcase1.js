describe("Test Suite For Sum Operation",function(){
    it("Should Sum n Numbers",function(){        
        var result = Sum(2,3,4);
        expect(9).toBe(result);
    })
    
    it("Add string and number",function(){        
        var result = Sum(2,"ABC",4);
        expect(0).toBe(result);
    })
    
    it("Add One number",function(){        
        var result = Sum(2);
        expect(2).toBe(result);
    })
    
    it("Add -negitve number",function(){        
        var result = Sum(-2,1);
        expect(-1).toBe(result);
    })
})


describe("Test Suite For Minus Operation",function(){
    it("Should Minus n Numbers",function(){        
        var result = Minus(5,1,1);
        expect(3).toBe(result);
    })
    
    it("Minus string and number",function(){        
        var result = Minus(2,"ABC",4);
        expect(0).toBe(result);
    })
    
    it("Minus One number",function(){        
        var result = Minus(2);
        expect(2).toBe(result);
    })
    
    it("Minus -negitve number",function(){        
        var result = Minus(-2,1);
        expect(-3).toBe(result);
    })
})

describe("Test Suite For Multiple Operation",function(){
    it("Should Multiple n Numbers",function(){        
        var result = Multiple(5,2,2);
        expect(20).toBe(result);
    })
    
    it("Multiple string and number",function(){        
        var result = Multiple(2,"ABC",4);
        expect(0).toBe(result);
    })
    
    it("Multiple One number",function(){        
        var result = Multiple(2);
        expect(2).toBe(result);
    })
    
    it("Multiple -negitve number",function(){        
        var result = Multiple(-2,-2);
        expect(4).toBe(result);
    })
    
     it("Multiple numbers with zero",function(){        
        var result = Multiple(-2,-2,0);
        expect(0).toBe(result);
    })
})


describe("Test Suite For Divide Operation",function(){
    it("Should Divide n Numbers",function(){        
        var result = Divide(12,2,2);
        expect(3).toBe(result);
    })
    
    it("Divide string and number",function(){        
        var result = Divide(2,"ABC",4);
        expect(0).toBe(result);
    })
    
    it("Divide One number",function(){        
        var result = Divide(2);
        expect(2).toBe(result);
    })
    
    it("Divide -negitve number",function(){        
        var result = Divide(-2,-2);
        expect(1).toBe(result);
    })
    
     it("Divide numbers with zero",function(){        
        var result = Multiple(0,5);
        expect(0).toBe(result);
    })
})