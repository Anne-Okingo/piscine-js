function blockChain(data, prev = { index: 0, hash: '0' }) {
    const index = prev.index + 1;
    const dataStr = JSON.stringify(data);
    const hash = hashCode(index + prev.hash + dataStr);

    const block = {
      index,
      hash,
      data,
      prev,

      chain(nextData) {
        return blockChain(nextData, this);
      }
    };

    return block;
  }