class Node<T> {
  /**
   *  Pointer to the next node, initially null
   */
  public next: Node<T> | null = null;
  /**
   *  Pointer to the previous node, initially null
   */
  public previous: Node<T> | null = null;
  public data: T;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

/**
 * linked list is a linear data structure where elements are stored in nodes.
 * Unlike arrays, linked lists don't have a fixed size in memory.
 * Each node in a linked list contains data and a reference (or pointer)
 * to the next node in the sequence, forming a chain-like structure.
 */
export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  /**
   * Inserting a node at the end of the list
   */
  append(data: T): Node<T> {
    const newNode = new Node<T>(data);

    if (!this.head) {
      this.head = newNode;
    } else {
      const getLast = (node: Node<T>): Node<T> => {
        return node.next ? getLast(node.next) : node;
      };

      const lastNode = getLast(this.head);
      newNode.previous = lastNode;
      lastNode.next = newNode;
    }

    return newNode;
  }

  /**
   * Printing the linked list elements
   */
  display(): void {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

interface ILinkedList<T> {
  append(data: T): Node<T>;
  // deleteNode(node: Node<T>): void;
  // traverse(): T[];
  // search(comparator: (data: T) => boolean): Node<T> | null;
  // size(): number;
  display(): void;
}
