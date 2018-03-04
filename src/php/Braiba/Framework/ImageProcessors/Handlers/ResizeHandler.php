<?php

namespace Braiba\Framework\ImageProcessors\Handlers;

use ThomasBickley\Entity\Image;

interface ResizeHandler
{
    public function resize(Image $image, $width, $height);

    public function resizeToStandard(Image $image, $standardName);
}
