/**
 * 155. Min Stack
 * 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
 

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
 */

/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.sLen = 0;
    this.min = [];
    this.mLen = 0;
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    ++this.sLen;
    if(this.mLen === 0 || x <= this.min[this.mLen - 1]){
        this.min.push(x);
        ++this.mLen;
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.sLen === 0){
        return;
    }
    let x = this.stack.pop();
    --this.sLen;
    if(x === this.min[this.mLen - 1]){
        this.min.pop();
        --this.mLen;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.sLen > 0 ? this.stack[this.sLen - 1] : undefined;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.mLen > 0 ? this.min[this.mLen - 1] : undefined;
};

 
//   Your MinStack object will be instantiated and called as such:
  var obj = new MinStack()
  obj.push(14)
  obj.push(21)
  obj.push(4)
  obj.push(34)
  obj.pop()
  var param_3 = obj.top()
  var param_4 = obj.getMin()
 
  console.log(param_3, param_4);
  
