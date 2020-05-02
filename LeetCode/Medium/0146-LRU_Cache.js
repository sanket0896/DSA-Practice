/**
 *  146. LRU Cache
 * 
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
 */

class ListNode{
    constructor(key, val){
        this.key = key;
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}

class DLList{
    constructor(){
        this.head = null;
        this.tail = null;
        
    }

    add(node){
        if(this.head === null){
            this.head = node;
            this.tail = node;
        }else{
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        return [
            this.head,
            this.head.next
        ]
    }

    removeLast(){
        if(this.tail === null){
            return [null, null];
        }

        let last = this.tail;
        if(last.prev === null){
            this.tail = null;
            this.head = null;
        }else{
            this.tail = last.prev;
            this.tail.next = null;
        }

        return last;
    }

    remove(node){
        let left = node.prev;
        let right = node.next;

        

        if(left === null && right === null){
            this.head = null;
            this.tail = null;
        }
        else if(left === null){
            this.head = right;
            this.head.prev = null;
        }
        else if(right === null){
            this.tail = left;
            this.tail.next = null;
        }
        else{
            left.next = node.next;
            right.prev = node.prev;
        }

        return [
            left,
            node,
            right
        ];
    }
}

class LRUCache{
    constructor(capacity){
        this.capacity = capacity;
        this.list = new DLList();
        this.map = new Map();
    }

    put(key, value){
        let node = new ListNode(key, value);
        if(this.map.has(key)){
            let oldNode = this.map.get(key);
            this.list.remove(oldNode);

            node.prev = null;
            node.next = null;
            
            this.list.add(node);
            this.map.set(node.key, node);
        }else{
            if(this.map.size === this.capacity){
                let lastElem = this.list.removeLast();
                lastElem && this.map.delete(lastElem.key);

                this.list.add(node);
                this.map.set(node.key, node);
            }else{
                
                this.list.add(node);
                this.map.set(node.key, node);
            }
        }
    }

    get(key){
        if(this.map.has(key)){
            
            let node = this.map.get(key);
            this.list.remove(node);
            node.prev = null;
            node.next = null;
            
            this.list.add(node);
            this.map.set(node.key, node);
            return node.value;
        }else{
            return -1;
        }
        
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let cache = new LRUCache( 2 );

cache.put(2, 1);
cache.put(3, 2);
console.log(cache.get(3));       
console.log(cache.get(2));       
cache.put(4, 3);    
console.log(cache.get(2)); 
console.log(cache.get(3)); 
console.log(cache.get(4)); 



// let cache = new LRUCache( 2 );

// cache.put(1, 1);
// cache.put(2, 2);
// console.log(cache.get(1));       // returns 1
// cache.put(3, 3);    // evicts key 2
// console.log(cache.get(2));       // returns -1 (not found)
// cache.put(4, 4);    // evicts key 1
// console.log(cache.get(1));       // returns -1 (not found)
// console.log(cache.get(3));       // returns 3
// console.log(cache.get(4));       // returns 4