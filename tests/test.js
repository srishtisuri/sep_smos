// describe('title', function() {
//     it('Should exist', function() {
//         expect(document.getElementsByClassName('title')).toExist();
//     });
// });

describe(' String to describe test suite ', function() {
    it(' String to describe test spec ', function() {
      var a = 12, b = a;
     
      expect(a).toBe(b);
      expect(a).not.toBe(null);
    });
      describe(' Nested suite ', function() {
        it(' Nested spec ', function() {
           /* code goes here */
        });  
      });
  });